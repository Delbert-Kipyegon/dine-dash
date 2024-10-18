import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { foodPreferences } = req.body;

		console.log({ foodPreferences });

		if (!foodPreferences) {
			return res.status(400).json({ error: "Food preferences are required" });
		}

		try {
			const completion = await openai.chat.completions.create({
				model: "gpt-4",
				messages: [
					{
						role: "system",
						content:
							"You are a nutrition expert generating personalized weekly meal plans.",
					},
					{
						role: "user",
						content: `Generate a balanced weekly meal plan based on the following food preferences: ${foodPreferences}. Include breakfast, lunch, and dinner.`,
					},
				],
				max_tokens: 800,
			});

			const mealPlan = completion.choices[0].message?.content;

			console.log(mealPlan);

			if (!mealPlan) {
				throw new Error("Failed to generate meal plan");
			}

			res.status(200).json({ mealPlan });
		} catch (error) {
			console.error("Error generating meal plan", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}

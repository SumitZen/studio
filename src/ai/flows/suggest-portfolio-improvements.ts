// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview Provides suggestions on how to improve a user's portfolio based on their credentials and career goals.
 *
 * - suggestPortfolioImprovements - A function that accepts user credentials and career goals, and returns suggestions for portfolio improvements.
 * - SuggestPortfolioImprovementsInput - The input type for the suggestPortfolioImprovements function.
 * - SuggestPortfolioImprovementsOutput - The return type for the suggestPortfolioImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPortfolioImprovementsInputSchema = z.object({
  credentials: z
    .string()
    .describe('A list of the user\'s educational and professional credentials.'),
  careerGoals: z
    .string()
    .describe('A description of the user\'s career goals and aspirations.'),
});
export type SuggestPortfolioImprovementsInput = z.infer<
  typeof SuggestPortfolioImprovementsInputSchema
>;

const SuggestPortfolioImprovementsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'A list of suggestions on how to improve the user\'s portfolio to better align with their career goals.'
    ),
});
export type SuggestPortfolioImprovementsOutput = z.infer<
  typeof SuggestPortfolioImprovementsOutputSchema
>;

export async function suggestPortfolioImprovements(
  input: SuggestPortfolioImprovementsInput
): Promise<SuggestPortfolioImprovementsOutput> {
  return suggestPortfolioImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPortfolioImprovementsPrompt',
  input: {schema: SuggestPortfolioImprovementsInputSchema},
  output: {schema: SuggestPortfolioImprovementsOutputSchema},
  prompt: `You are an expert career coach specializing in portfolio optimization.

You will be provided with a list of the user's credentials and their career goals. Your task is to provide suggestions on how the user can improve their portfolio to better align with their career goals.

Credentials: {{{credentials}}}
Career Goals: {{{careerGoals}}}

Suggestions:`,
});

const suggestPortfolioImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestPortfolioImprovementsFlow',
    inputSchema: SuggestPortfolioImprovementsInputSchema,
    outputSchema: SuggestPortfolioImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

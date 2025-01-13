import { QuestionsArraySchema } from "../../model/techmilionerzy/techmilionerzy";
import { client } from "../../database/index";

export const fetchQuestions = async () => {
  try {
    if (!client) {
      throw new Error("Database pool not initialized");
    }
    const { rows } = await client.query(`
      (SELECT * FROM techmilionerzy.pytania WHERE poziom = 'easy' ORDER BY RANDOM() LIMIT 4)
      UNION ALL
      (SELECT * FROM techmilionerzy.pytania WHERE poziom = 'medium' ORDER BY RANDOM() LIMIT 4)
      UNION ALL
      (SELECT * FROM techmilionerzy.pytania WHERE poziom = 'hard' ORDER BY RANDOM() LIMIT 4)
      ORDER BY poziom
    `);

    return QuestionsArraySchema.parse(rows);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

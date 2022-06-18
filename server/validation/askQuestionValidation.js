import Joi from 'joi';

//register input validation
export const askQuestionValidation = (data) => {
  const schema = Joi.object({
    question: Joi.string().required().max(500),
    answer: Joi.string().max(700),
    respondent: Joi.string().required('joi-objectid'),
  });
  console.log('user question validated');
  return schema.validate(data);
};

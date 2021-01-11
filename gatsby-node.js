exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    AFFIRM_API_KEY: Joi.string()
      .required()
      .description(`This option is required and is your Affirm API key.`),
  });
};

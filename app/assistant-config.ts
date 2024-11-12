export let assistantId =
  "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"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}

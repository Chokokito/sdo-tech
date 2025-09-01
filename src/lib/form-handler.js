export async function submitToWeb3Forms(data) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      apikey: process.env.NEXT_PUBLIC_WebFORMS,
      ...data,
    }),
  });

  const result = await response.json();

  if (!result.success) {
    throw new Error("Falha ao enviar o formulário.");
  }

  return result;
}

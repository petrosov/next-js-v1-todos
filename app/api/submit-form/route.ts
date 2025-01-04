export async function POST(req: Request) {
  try {
    // Получаем данные из тела запроса
    const formData = await req.json();

    // Пример обработки данных
    const { name, email, phone } = formData;
    console.log("Form data received:", { name, email, phone });

    // Возвращаем успешный ответ
    return new Response(JSON.stringify({ message: "Data successfully received!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error handling form submission:", error);
    return new Response(
      JSON.stringify({ message: "Error processing form data." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
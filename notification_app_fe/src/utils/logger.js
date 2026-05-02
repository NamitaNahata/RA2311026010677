const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuYW1pdGFkcnMxMjNAZ21haWwuY29tIiwiZXhwIjoxNzc3NzAwMDMxLCJpYXQiOjE3Nzc2OTkxMzEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI4YTEwN2YwYS01NDZkLTRkNTQtYWE3MC0wOTlmM2Y3NzRhZjUiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJuYW1pdGEgbmFoYXRhIiwic3ViIjoiNDk4Y2RhYzktNDJmNS00NmVhLWI0N2QtNWRiY2U2NjI5OTY2In0sImVtYWlsIjoibmFtaXRhZHJzMTIzQGdtYWlsLmNvbSIsIm5hbWUiOiJuYW1pdGEgbmFoYXRhIiwicm9sbE5vIjoicmEyMzExMDI2MDEwNjc5IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiNDk4Y2RhYzktNDJmNS00NmVhLWI0N2QtNWRiY2U2NjI5OTY2IiwiY2xpZW50U2VjcmV0IjoiVnFZSmV5QnFiYk5wZWV4aCJ9.POr00bLwbmBxS3KWIJSIF9PVXoR1RwCP9RPkLIX215w";

export async function Log(stack, level, pkg, message) {
  try {
    const res = await fetch("http://20.207.122.201/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });

    const data = await res.json();
    console.log("Log Response:", data);
  } catch (err) {
    console.error("Logging failed:", err);
  }
}
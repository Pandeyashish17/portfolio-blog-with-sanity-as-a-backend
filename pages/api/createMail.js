import sanityClient from "@sanity/client";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
};

const client = sanityClient(config);

export default async function createMail(req, res) {
  const { name, email, message } = JSON.parse(req.body);

  try {
    await client.create({
      _type: "mails",
      name,
      email,
      message,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Couldn't Send the message", error });
  }

  return res.status(200).json({ message: "Message Send" });
}

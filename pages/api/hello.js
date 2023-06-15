export default function handler(_, res) {
  return res.status(200).json({ txt: "Hello" });
}

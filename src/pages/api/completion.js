export default function completion(req, res) {
	if (req.method === 'POST') {
	} else {
		return res.status(500).json({ error: { message: 'invalid API' } });
	}
}

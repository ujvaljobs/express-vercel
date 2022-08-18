const express = require("express");
const app = express();
const product = require("./api/product");

app.use(express.json({ extended: false }));
app.get('/order', (req, res) => {
	const authHeader = `Basic ${btoa('rzp_test_IMzw5tP8UzxP6Q:auOjL7nS14GfjPEEGCjZYmRf')}`;
	axios({
		method: 'post',
		url: `https://api.razorpay.com/v1/orders`,
		headers: { "content-type": "application/json", 'authorization': authHeader },
		data: {
			amount: Number(req.query.amount),
			currency: req.query.currency,
		}
	})
		.then((response) => {
			res.send(response.data)
		})
		.catch((err) => {
			res.send(err)
		})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

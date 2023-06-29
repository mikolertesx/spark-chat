"use client";

import { useEffect } from "react";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

// icons
import "primeicons/primeicons.css";

// could use some decluttering
import ChatsList from "../components/ChatsList.js";
import MessageInput from "../components/MessageInput.js";
import { ScrollPanel } from "primereact/scrollpanel";

export default function Home() {
	useEffect(() => {
		const getData = async () => {
			const data = await fetch("http://localhost:8000/");
			const jsonResponse = await data.json();
			console.log(jsonResponse);
		};

		getData();
	}, []);

	const text = (
		<p>
			In princípio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum.
			Hoc erat in princípio apud Deum. Omnia per ipsum facta sunt: et sine ipso
			factum est nihil, quod factum est: in ipso vita erat, et vita erat lux
			hóminum: et lux in ténebris lucet, et ténebræ eam non comprehendérunt.
			Fuit homo missus a Deo, cui nomen erat Ioánnes. Hic venit in testimónium,
			ut testimónium perhibéret de lúmine, ut omnes créderent per illum. Non
			erat ille lux, sed ut testimónium perhibéret de lúmine. Erat lux vera, quæ
			illúminat omnem hóminem veniéntem in hunc mundum. In mundo erat, et mundus
			per ipsum factus est, et mundus eum non cognóvit. In própria venit, et sui
			eum non recepérunt. Quotquot autem recepérunt eum, dedit eis potestátem
			fílios Dei fíeri, his, qui credunt in nómine eius: qui non ex sanguínibus,
			neque ex voluntáte carnis, neque ex voluntáte viri, sed ex Deo nati sunt.
			Et Verbum caro factum est, et habitávit in nobis: et vídimus glóriam eius,
			glóriam quasi Unigéniti a Patre, plenum grátiæ et veritátis. In princípio
			erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum. Hoc erat in
			princípio apud Deum. Omnia per ipsum facta sunt: et sine ipso factum est
			nihil, quod factum est: in ipso vita erat, et vita erat lux hóminum: et
			lux in ténebris lucet, et ténebræ eam non comprehendérunt. Fuit homo
			missus a Deo, cui nomen erat Ioánnes. Hic venit in testimónium, ut
			testimónium perhibéret de lúmine, ut omnes créderent per illum. Non erat
			ille lux, sed ut testimónium perhibéret de lúmine. Erat lux vera, quæ
			illúminat omnem hóminem veniéntem in hunc mundum. In mundo erat, et mundus
			per ipsum factus est, et mundus eum non cognóvit. In própria venit, et sui
			eum non recepérunt. Quotquot autem recepérunt eum, dedit eis potestátem
			fílios Dei fíeri, his, qui credunt in nómine eius: qui non ex sanguínibus,
			neque ex voluntáte carnis, neque ex voluntáte viri, sed ex Deo nati sunt.
			Et Verbum caro factum est, et habitávit in nobis: et vídimus glóriam eius,
			glóriam quasi Unigéniti a Patre, plenum grátiæ et veritátis. In princípio
			erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum. Hoc erat in
			princípio apud Deum. Omnia per ipsum facta sunt: et sine ipso factum est
			nihil, quod factum est: in ipso vita erat, et vita erat lux hóminum: et
			lux in ténebris lucet, et ténebræ eam non comprehendérunt. Fuit homo
			missus a Deo, cui nomen erat Ioánnes. Hic venit in testimónium, ut
			testimónium perhibéret de lúmine, ut omnes créderent per illum. Non erat
			ille lux, sed ut testimónium perhibéret de lúmine. Erat lux vera, quæ
			illúminat omnem hóminem veniéntem in hunc mundum. In mundo erat, et mundus
			per ipsum factus est, et mundus eum non cognóvit. In própria venit, et sui
			eum non recepérunt. Quotquot autem recepérunt eum, dedit eis potestátem
			fílios Dei fíeri, his, qui credunt in nómine eius: qui non ex sanguínibus,
			neque ex voluntáte carnis, neque ex voluntáte viri, sed ex Deo nati sunt.
			Et Verbum caro factum est, et habitávit in nobis: et vídimus glóriam eius,
			glóriam quasi Unigéniti a Patre, plenum grátiæ et veritátis. In princípio
			erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum. Hoc erat in
			princípio apud Deum. Omnia per ipsum facta sunt: et sine ipso factum est
			nihil, quod factum est: in ipso vita erat, et vita erat lux hóminum: et
			lux in ténebris lucet, et ténebræ eam non comprehendérunt. Fuit homo
			missus a Deo, cui nomen erat Ioánnes. Hic venit in testimónium, ut
			testimónium perhibéret de lúmine, ut omnes créderent per illum. Non erat
			ille lux, sed ut testimónium perhibéret de lúmine. Erat lux vera, quæ
			illúminat omnem hóminem veniéntem in hunc mundum. In mundo erat, et mundus
			per ipsum factus est, et mundus eum non cognóvit. In própria venit, et sui
			eum non recepérunt. Quotquot autem recepérunt eum, dedit eis potestátem
			fílios Dei fíeri, his, qui credunt in nómine eius: qui non ex sanguínibus,
			neque ex voluntáte carnis, neque ex voluntáte viri, sed ex Deo nati sunt.
			Et Verbum caro factum est, et habitávit in nobis: et vídimus glóriam eius,
			glóriam quasi Unigéniti a Patre, plenum grátiæ et veritátis. In princípio
			erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum. Hoc erat in
			princípio apud Deum. Omnia per ipsum facta sunt: et sine ipso factum est
			nihil, quod factum est: in ipso vita erat, et vita erat lux hóminum: et
			lux in ténebris lucet, et ténebræ eam non comprehendérunt. Fuit homo
			missus a Deo, cui nomen erat Ioánnes. Hic venit in testimónium, ut
			testimónium perhibéret de lúmine, ut omnes créderent per illum. Non erat
			ille lux, sed ut testimónium perhibéret de lúmine. Erat lux vera, quæ
			illúminat omnem hóminem veniéntem in hunc mundum. In mundo erat, et mundus
			per ipsum factus est, et mundus eum non cognóvit. In própria venit, et sui
			eum non recepérunt. Quotquot autem recepérunt eum, dedit eis potestátem
			fílios Dei fíeri, his, qui credunt in nómine eius: qui non ex sanguínibus,
			neque ex voluntáte carnis, neque ex voluntáte viri, sed ex Deo nati sunt.
			Et Verbum caro factum est, et habitávit in nobis: et vídimus glóriam eius,
			glóriam quasi Unigéniti a Patre, plenum grátiæ et veritátis. In princípio
			erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum. Hoc erat in
			princípio apud Deum. Omnia per ipsum facta sunt: et sine ipso factum est
			nihil, quod factum est: in ipso vita erat, et vita erat lux hóminum: et
			lux in ténebris lucet, et ténebræ eam non comprehendérunt. Fuit homo
			missus a Deo, cui nomen erat Ioánnes. Hic venit in testimónium, ut
			testimónium perhibéret de lúmine, ut omnes créderent per illum. Non erat
			ille lux, sed ut testimónium perhibéret de lúmine. Erat lux vera, quæ
			illúminat omnem hóminem veniéntem in hunc mundum. In mundo erat, et mundus
			per ipsum factus est, et mundus eum non cognóvit. In própria venit, et sui
			eum non recepérunt. Quotquot autem recepérunt eum, dedit eis potestátem
			fílios Dei fíeri, his, qui credunt in nómine eius: qui non ex sanguínibus,
			neque ex voluntáte carnis, neque ex voluntáte viri, sed ex Deo nati sunt.
			Et Verbum caro factum est, et habitávit in nobis: et vídimus glóriam eius,
			glóriam quasi Unigéniti a Patre, plenum grátiæ et veritátis. In princípio
			erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum. Hoc erat in
			princípio apud Deum. Omnia per ipsum facta sunt: et sine ipso factum est
			nihil, quod factum est: in ipso vita erat, et vita erat lux hóminum: et
			lux in ténebris lucet, et ténebræ eam non comprehendérunt. Fuit homo
			missus a Deo, cui nomen erat Ioánnes. Hic venit in testimónium, ut
			testimónium perhibéret de lúmine, ut omnes créderent per illum. Non erat
			ille lux, sed ut testimónium perhibéret de lúmine. Erat lux vera, quæ
			illúminat omnem hóminem veniéntem in hunc mundum. In mundo erat, et mundus
			per ipsum factus est, et mundus eum non cognóvit. In própria venit, et sui
			eum non recepérunt. Quotquot autem recepérunt eum, dedit eis potestátem
			fílios Dei fíeri, his, qui credunt in nómine eius: qui non ex sanguínibus,
			neque ex voluntáte carnis, neque ex voluntáte viri, sed ex Deo nati sunt.
			Et Verbum caro factum est, et habitávit in nobis: et vídimus glóriam eius,
			glóriam quasi Unigéniti a Patre, plenum grátiæ et veritátis.
		</p>
	);

	// perhaps friends list on the right and chat window
	// on the right.
	return (
		// <main className="flex min-h-screen flex-col items-center justify-between p-24">
		// 	<Button icon={"pi pi-check"} label="Start Chatting!"></Button>
		// </main>

		// soy mejicano!!! jajajajaja
		//                   - monika

		<div className="flex w-screen h-screen">
			<ChatsList />
			<div className="relative flex flex-column w-9">
				<div
					className="p-6 flex-grow-1 overflow-y-auto"
					style={{ width: "100%" }}
				>
					{text}
				</div>
				<MessageInput />
			</div>
		</div>
	);
}

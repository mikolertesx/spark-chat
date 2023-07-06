import { useState, useEffect } from "react";
import { socket } from "@/util/connectToSocket";

export default function MessageOutput() {
  const [placeHolderText, setPlaceHolderText] = useState("");
  // Socket IO way of handling things:
  // https://socket.io/how-to/use-with-react
  useEffect(() => {
    function onReceiveMessage(message) {
      setPlaceHolderText(message);
    }

    socket.on("receive-message", onReceiveMessage);

    return () => {
      socket.off("receive-message", onReceiveMessage);
    };
  }, []);

  const text = (
    <div>
      In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum.
      Hoc erat in principio apud Deum. Omnia per ipsum facta sunt: et sine ipso
      factum est nihil, quod factum est. In ipso vita erat, et vita erat lux
      hominum: et lux in tenebris lucet, et tenebræ eam non comprehenderunt.
      Fuit homomissus a Deo, cui nomen erat Joannes. Hic venit in testimoniumut
      testimonium perhiberet de lumine, ut omnes crederent per illum. Non erat
      ille lux, sed ut testimonium perhiberet de lumine. Erat lux vera, quæ
      illuminat omnem hominemvenientem in hunc mundum. In mundo erat, et mundus
      per ipsum factus est, et mundus eum non cognovit. In propria venit, et sui
      eum non receperunt. Quotquot autem receperunt eum,dedit eis potestatem
      filios Dei fieri, his qui credunt in nomine ejus:qui non ex
      sanguinibus,neque ex voluntate carnis, neque ex voluntate viri, sed ex Deo
      nati sunt. Et Verbum caro factum est, et habitavit in nobis: et vidimus
      gloriam ejus, gloriam quasi unigeniti a Patreplenum gratiæ et veritatis.
      Joannes testimonium perhibet de ipso, et clamat dicens: Hic erat quem
      dixi: Qui post me venturus est, ante me factus est: quia prior me erat. Et
      dedine ejusnos omnes accepimus, et gratiam pro gratia: quia lex per Moysen
      data est, gratia et veritas per Jesum Christum facta est. Deum nemo vidit
      umquam: unigenitus Filius, qui est in sinu Patris, ipse enarravit. Et hoc
      est testimonium Joannis, quando miserunt Judæi ab Jerosolymis sacerdotes
      et Levitas ad eum ut interrogarent eum: Tu quis es? Et confessus est, et
      non negavit, et confessus est: Quia non sum ego Christus. Et
      interrogaverunt eum: Quid ergo? Elias es tu? Et dixit: Non sum. Propheta
      es tu? Et respondit: Non. Dixerunt ergo ei: Quis es ut responsum demus his
      qui miserunt nos? quid dicis de teipso? Ait: Ego vox clamantis in deserto:
      Dirigite viam Domini, sicut dixit Isaias propheta. Et qui missi fuerant,
      erant ex pharisæis. Et interrogaverunt eum, et dixerunt ei: Quid ergo
      baptizas, si tu non es Christus, neque Elias, neque propheta? Respondit
      eis Joannes, dicens: Ego baptizo in aqua: medius autem vestrum stetit,
      quem vos nescitis. Ipse est qui post me venturus est, qui ante me factus
      est: cujus ego non sum dignus ut solvam ejus corrigiam calceamenti. Hæc in
      Bethania facta sunt trans Jordanem, ubi erat Joannes baptizans. Altera die
      vidit Joannes Jesum venientem ad se, et ait: Ecce agnus Dei, ecce qui
      tollit peccatum mundi. Hic est de quo dixi: Post me venit vir qui ante me
      factus est: quia prior me erat: et ego nesciebam eum, sed ut manifestetur
      in Israël, propterea veni ego in aqua baptizans. Et testimonium perhibuit
      Joannes, dicens: Quia vidi Spiritum descendentem quasi columbam de cælo,
      et mansit super eum. Et ego nesciebam eum: sed qui misit me baptizare in
      aqua, ille mihi dixit: Super quem videris Spiritum descendentem, et
      manentem super eum, hic est qui baptizat in Spiritu Sancto. Et ego vidi:
      et testimonium perhibui quia hic est Filius Dei. Altera die iterum stabat
      Joannes, et ex discipulis ejus duo. Et respiciens Jesum ambulantem, dicit:
      Ecce agnus Dei. Et audierunt eum duo discipuli loquentem, et secuti sunt
      Jesum. Conversus autem Jesus, et videns eos sequentes se, dicit eis: Quid
      quæritis? Qui dixerunt ei: Rabbi (quod dicitur interpretatum Magister),
      ubi habitas? Dicit eis: Venite et videte. Venerunt, et viderunt ubi
      maneret, et apud eum manserunt die illo: hora autem erat quasi decima.
      Erat autem Andreas, frater Simonis Petri, unus ex duobus qui audierant a
      Joanne, et secuti fuerant eum. Invenit hic primum fratrem suum Simonem, et
      dicit ei: Invenimus Messiam (quod est interpretatum Christus). Et adduxit
      eum ad Jesum. Intuitus autem eum Jesus, dixit: Tu es Simon, filius Jona;
      tu vocaberis Cephas, quod interpretatur Petrus. In crastinam voluit exire
      in Galilæam, et invenit Philippum. Et dicit ei Jesus: Sequere me. Erat
      autem Philippus a Bethsaida, civitate Andreæ et Petri. Invenit Philippus
      Nathanaël, et dicit ei: Quem scripsit Moyses in lege, et prophetæ,
      invenimus Jesum filium Joseph a Nazareth. Et dixit ei Nathanaël: A
      Nazareth potest aliquid boni esse? Dicit ei Philippus: Veni et vide. Vidit
      Jesus Nathanaël venientem ad se, et dicit de eo: Ecce vere Israëlita, in
      quo dolus non est. Dicit ei Nathanaël: Unde me nosti? Respondit Jesus, et
      dixit ei: Priusquam te Philippus vocavit, cum esses sub ficu, vidi te.
      Respondit ei Nathanaël, et ait: Rabbi, tu es Filius Dei, tu es rex Israël.
      Respondit Jesus, et dixit ei: Quia dixi tibi: Vidi te sub ficu, credis;
      majus his videbis. Et dicit ei: Amen, amen dico vobis, videbitis cælum
      apertum, et angelos Dei ascendentes, et descendentes supra Filium hominis.
    </div>
  );

  return (
    <div className="message-history-container border-round-lg shadow-4 flex-grow-1 overflow-y-auto p-6 mb-3">
      <div className="message-history" style={{ width: "100%" }}>
        {placeHolderText ? placeHolderText : text}
      </div>
    </div>
  );
}

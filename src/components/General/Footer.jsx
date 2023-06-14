import { VK, TG } from "../../env"
import { Link } from "react-router-dom";
import pathIconVK from "../../assets/images/icons/vk.png"
import pathIconTG from "../../assets/images/icons/tg.png"

const Footer = ({ user }) => {
	return <footer>
		<div className="footerLink header__menu">
			{user && <>
				<Link to="/catalog" title="Каталог">
					<span>Каталог</span>
				</Link>&nbsp;
				<Link to="/" title="Избранное">
					<span>Избранное</span>
				</Link>&nbsp;
				<Link to="/" title="Корзина">
					<span>Корзина</span>
				</Link>&nbsp;
				<Link to="/profile" title="Профиль">
					<span>Профиль</span>
				</Link></>
			}
		</div>
		<div className="footerContact">
			<div className="tel"><Link to="tel:+79266659841">+7(926)6659841</Link></div>
			<div><Link to="mailto:info@df24.ru">info@df24.ru</Link></div>
			<div><Link to="#">г. Москва, ул. Вавилова д. 9</Link></div>
		</div>
		<div className="footerInfo">
			@ ООО<br />
			ДогФуд<br />
			ОГРНИП 111112222233333<br />
			ИНН 444455556666
			<div>
				<Link to={VK} target="_blank"><img width="25px" src={pathIconVK} alt="ВКонтакте" /></Link>
				<Link to={TG} target="_blank"><img width="28px" src={pathIconTG} alt="Телеграмм" /></Link>
			</div>
		</div>



	</footer>
}

export default Footer;
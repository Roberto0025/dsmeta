import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

//cria um tipo a ser usado
type Props = {
    saleId : number;
}

//função para chamar a notificação
function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        //console.log("Sucesso");
        toast.info("SMS enviado com sucesso!");
    })
}

                            //chama o dado e de qual tipo
function NotificationButton({saleId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;


import Modal from '../components/modal/Modal';
import { ModalImg, ModalBtnClose } from '../components/modal/Modal.styled';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation,useHistory,useRouteMatch } from 'react-router-dom';



const Photo = () => {
        const {state:{alt},search}=useLocation();
        const match=useRouteMatch()
        const history=useHistory();
        let large='';
        console.log('match :>> ', match);

let searchParams = new URLSearchParams(search);
//Iterate the search parameters.
for (let p of searchParams) {
  if(p[0]==='large'){large=p[1]};
}

        const toggleModal=()=>{history.goBack()}

        return (
                <Modal onClose={toggleModal}>
                <ModalImg src={large} alt={alt} />
                <ModalBtnClose type="button" onClick={toggleModal}>
                  <AiOutlineClose />
                </ModalBtnClose>
              </Modal>
        );
}

export default Photo;
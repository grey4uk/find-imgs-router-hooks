
import Modal from '../components/modal/Modal';
import { ModalImg, ModalBtnClose } from '../components/modal/Modal.styled';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation,useHistory } from 'react-router-dom';


const Photo = () => {
        const {state:{alt},search}=useLocation();
        const history=useHistory();
        let large='';

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
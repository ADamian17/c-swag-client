import { Container } from 'react-bootstrap';
import './Container.scss';

/* type can be true or false */
const ContainerComponnet = ({ children, type }) => <Container fluid={type ? 'xl' : ''}>{children}</Container>

export default ContainerComponnet;
import { Container } from 'react-bootstrap';
import './Container.scss';

/* type can be true or false */
const ContainerComponnet = ({ children, fluid }) => <Container fluid={fluid ? 'xl' : ''}>{children}</Container>

export default ContainerComponnet;
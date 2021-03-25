import './Container.scss';

/* type can be true or false */
const Container = ({ children, fluid }) => <div className={ fluid ? "fluid" : "container" }>{ children }</div> 

export default Container;
import Nav from 'react-bootstrap/Nav';
import styles from '../style.module.css';

function BottomBar() {
  return (
    <div className={styles.footer}>
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link href="https://www.hua.gr/index.php/el/">HUA Website</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://github.com/alexander-antypas/ClientHub">Github</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default BottomBar;
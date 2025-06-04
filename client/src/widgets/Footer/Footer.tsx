import Contacts from './Contacts';
import Schedule from './Schedule';
import { FOOTER_LABELS } from '@/app/data/labels';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <Schedule />
        <Contacts />
      </div>
      <span className="footer-copyright">&copy; { FOOTER_LABELS.COPYRIGHT.RU }</span>
    </div>
  )
}

export default Footer;
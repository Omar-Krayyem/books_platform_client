import '../Recommended/style.css';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/index';
import Card from '../../components/Card/index';

const Recommended = () => {
    return (
        <div className='Recommended'>
            <div className='Upp'>
                <div className='Recommended_Nav'><Nav/></div>
                <div className='Recommended_Body'>
                    <div className="cards_container">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
            
            <div className='Recommended_Footer'><Footer/></div>
        </div>
    );
}

export default Recommended;
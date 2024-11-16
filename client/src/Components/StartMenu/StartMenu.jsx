/* eslint-disable react/prop-types */
import './StartMenu.css'

export default function StartMenu ({changeState, changeCards}) {

  return (
    <>
    <div className='start-menu-container'>
        <div className='logo'>
          <img src="./text.png" alt="logo" className='rotating-image' />
          <img src="./george-and-fred-heads.png" alt="George and Fred's heads" className='head-pics' style={{width: '75%'}}/>
        </div>
        <div className='game-choices'>
          <h2 className='start-menu-button' onClick={() => {changeState('game'); changeCards(4)} }>
          Two Cards Each
          </h2>
          <h2 className='start-menu-button' onClick={() => {changeState('game'); changeCards(8)} }>
          Four Cards Each 
          </h2>
        </div>
    </div>
    </>
  )
}
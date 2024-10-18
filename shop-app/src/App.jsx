
import './App.css'
import Basket from './components/Basket'
import Header from './components/Header'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'
import PageContainer from './container/PageContainer'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { drawerState } from './redux/slice/basketSlice'


function App() {
  const { drawer } = useSelector((store) => store.basket);
  const dispatch = useDispatch();



  return (
    <div>
      <PageContainer>
        <Loading />
        <Drawer anchor='right' open={drawer} onClose={() => dispatch(drawerState())} >
          <Basket />
        </Drawer>
        <Header />
        <RouterConfig />
      </PageContainer>
    </div>

  )
}

export default App


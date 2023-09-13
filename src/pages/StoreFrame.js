import SubHeader from '../components/SubHeader';
import CustomPitch from '../components/CustomPitch';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

export default function StoreFrame() {
    return (
        <>
            <ScrollToTop />
            <SubHeader />
            <Outlet />
            <CustomPitch />
        </>
    )
}
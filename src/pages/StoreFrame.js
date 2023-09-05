import SubHeader from '../components/SubHeader';
import CustomPitch from '../components/CustomPitch';
import { Outlet } from 'react-router-dom';

export default function StoreFrame() {
    return (
        <>
            <SubHeader />
            <Outlet />
            <CustomPitch />
        </>
    )
}
import React, {Component} from 'react';
import CardGrid from './CardGrid';

import tibia from '../../assets/Tibia_Bone_Shape_PC2.png'
import patella from '../../assets/Patella_Thickness_PC4.png'
import meniscus from '../../assets/Lateral_Meniscus_Bone_Shape_PC9.png'

class paperCard extends Component {
    render() {
        return (
            <div className='wrapper-card'>
                <CardGrid img={tibia} title='tibia' description='tibia desc.....................' btn_text='tibia paper'/>
                <CardGrid img={patella} title='patella' description='patella desc........................' btn_text='patella paper'/>
                <CardGrid img={meniscus} title='meniscus' description='meniscus desc.............................................' btn_text='meniscus paper'/>

            </div>
        );
    }
}

export default paperCard;
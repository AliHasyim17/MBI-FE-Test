import React from 'react'

interface Props {
    open: boolean
    onClose: any
}

export const AddData: React.FC<Props> = ({open, onClose}) => {
    if(!open) return null
    return (
        <div className='pop-up'>
            <div className='container'>
                <h2 className='form-data'>Add a Data</h2>
                <form>
                    <input type="text" name='Name' placeholder='Name'/>
                    <input type="text" name='Height' placeholder='Height'/>
                    <input type="text" name='Mass' placeholder='Mass'/>
                    <input type="text" name='HairColor' placeholder='Hair Color'/>
                    <input type="text" name='SkinColor' placeholder='Skin Color'/>
                    <button type='submit' className='btn-submit'>Add</button>
                </form>
                <div>
                    <p onClick={onClose} className="close-btn">X</p>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default AddData
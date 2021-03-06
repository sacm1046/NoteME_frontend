import React, {useContext} from 'react'
import { Context } from '../store/appContext'

const ModalUserModificarAgenda = props => {
    const { store, actions } = useContext(Context);
    
    return (
        <div className="modal fade" id="ModalUserModificarAgenda" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        Modificar Agenda
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div>
                        <div className="form-group modal-body">
                            <label className="d-block text-muted">Asigne un nuevo nombre a su agenda</label>
                            <input type="text" defaultValue={store.currentAgenda.title} name="titleAgenda" className="form-control" onChange={e => actions.handleChange(e)}/>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-end">
                        <button type="button" className="btn btn-success mr-1" data-dismiss="modal" onClick={() => actions.putAgenda('/api/agendas/')}>Modificar</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalUserModificarAgenda
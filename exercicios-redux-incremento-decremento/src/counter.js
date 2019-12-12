import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {inc, dec, stepChange} from "./counterActions";

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input value={props.counter.step} onChange={props.stepChange} />
        <button type="buttom" onClick={props.inc}>Incrementar</button>
        <button type="buttom" onClick={props.dec} value="Decrementar">Decrementar</button>
    </div>
)

const mapStateToProps = (state) => ({counter: state.counter})

const mapDispatchToProps = (dispatch) => bindActionCreators({inc, dec, stepChange} , dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
import React from 'react';
import { Td } from './style';

export default (props) => {
    return (
        <tr
            key={props.id}
        >
            <Td width='15%'>{props.id}</Td>
            <Td width='25%'>{props.name}</Td>
            <Td width='40%'>{props.email}</Td>
            <Td style={{ textAlign: 'right' }}>
                <div style={{ color: '#EA5359', cursor: 'pointer' }}>
                    Delete
                </div>
            </Td>
        </tr>
    )
}
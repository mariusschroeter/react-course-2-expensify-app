import React from 'react'
import { Link } from 'react-router-dom';

export default function ExpenseListItem({ id, description, amount, createdAt }) {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h4>{description}</h4>
            </Link>
            <p>{amount} - {createdAt}</p>
        </div>
    )
}

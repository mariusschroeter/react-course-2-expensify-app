import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Expenses from "../components/ExpenseDashboard"
import AddExpenses from '../components/AddExpenses';
import Header from '../components/Header';
import EditExpenses from '../components/EditExpenses';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Expenses}></Route>
                    <Route path="/add" component={AddExpenses}></Route>
                    <Route path="/edit/:id" component={EditExpenses}></Route>
                    <Route path="/help" component={Help}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}


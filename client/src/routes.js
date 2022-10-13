import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { MainPage } from './pages/MainPage'
import { AboutPage } from './pages/AboutPage'
import { ProjectPage } from './pages/ProjectPage'
import { CategoryesPage } from './pages/CategoryesPage'
import { ItemPage } from './pages/ItemPage'
import { ExchangePage } from './pages/ExchangePage'
import { TeamPage } from './pages/TeamPage'
import { DonatePage } from './pages/DonatePage'
import { HomePage } from './pages/HomePage'
import { ContactsPage } from './pages/ContactsPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { DataUsePolicyPage } from './pages/DataUsePolicyPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/main" exact>
                    <MainPage />
                </Route>
                <Route path="/about" exact>
                    <AboutPage />
                </Route>
                <Route path="/team" exact>
                    <TeamPage />
                </Route>
                <Route path="/project" exact>
                    <ProjectPage />
                </Route>
                <Route path="/categoryes" exact>
                    <CategoryesPage />
                </Route>
                <Route path="/item" exact>
                    <ItemPage />
                </Route>
                <Route path="/exchange" exact>
                    <ExchangePage />
                </Route>
                <Route path="/donate" exact>
                    <DonatePage />
                </Route>
                <Route path="/home" exact>
                    <HomePage />
                </Route>
                <Route path="/contacts" exact>
                    <ContactsPage />
                </Route>
                <Route path="/privacypolicy" exact>
                    <PrivacyPolicyPage />
                </Route>
                <Route path="/datausepolicy" exact>
                    <DataUsePolicyPage />
                </Route>
                <Redirect to="/main" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/auth" exact>
                <AuthPage />
            </Route>
            <Redirect to="/auth" />
        </Switch>
    )
}
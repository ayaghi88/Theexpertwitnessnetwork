/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import JoinNetwork from './pages/JoinNetwork';
import Consult from './pages/Consult';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-network" element={<JoinNetwork />} />
        <Route path="/consult" element={<Consult />} />
      </Routes>
    </Layout>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import Head from "../component/Head";

export default function Home() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch('/api/clients');
                const data = await response.json();
                setClients(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }

        fetchCategories();
    }, []);

    return (
        <>
            <Head />
            <div className="bg-gray-50 py-10 mt-20">
                <div className="container mx-auto">
                    <h4
                        className="text-3xl md:text-4xl font-bold text-center"
                        style={{ color: "#2585f8" }}
                    >
                        Clients
                    </h4>
                </div>
            </div>
            <div className="container mx-auto mt-10 px-5">
                <div className="bg-white shadow-md rounded-md p-6">
                    {/* List of clients with location and client name in same row */}
                    <ul className="space-y-4">
                        {clients.map((client) => (
                            <li key={client.id} className="border-b pb-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <strong>Location:</strong> {client.location}
                                    </div>
                                    <div>
                                        <strong>Client Name:</strong> {client.client}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}

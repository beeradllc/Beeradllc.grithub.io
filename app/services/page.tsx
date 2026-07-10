'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/styles/pages.module.css';

interface Service {
  id: string;
  name: string;
  description: string;
  price?: number;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      name: 'Diagnostics',
      description: 'Comprehensive diagnostic services to identify equipment issues quickly and accurately.',
      price: 150,
    },
    {
      id: '2',
      name: 'Electrical Systems',
      description: 'Expert repair and maintenance of electrical components and wiring systems.',
      price: 200,
    },
    {
      id: '3',
      name: 'Hydraulics',
      description: 'Hydraulic system repair, maintenance, and component replacement.',
      price: 250,
    },
    {
      id: '4',
      name: 'HVAC',
      description: 'Heating, ventilation, and air conditioning system services for equipment cabs.',
      price: 180,
    },
    {
      id: '5',
      name: 'General Repair',
      description: 'Complete repair and maintenance services for all heavy equipment types.',
      price: 220,
    },
    {
      id: '6',
      name: 'Preventive Maintenance',
      description: 'Regular maintenance programs to keep your equipment running smoothly.',
      price: 175,
    },
  ]);

  useEffect(() => {
    // Load services from localStorage
    const saved = localStorage.getItem('services');
    if (saved) {
      setServices(JSON.parse(saved));
    }
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>Our Services</h1>
        <p>We offer comprehensive repair and diagnostic services for heavy equipment.</p>
      </section>

      <section className={styles.serviceGrid}>
        {services.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            {service.price && (
              <p style={{ marginTop: '1rem', fontWeight: 'bold', color: '#ffed4e' }}>
                Starting at: ${service.price}
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
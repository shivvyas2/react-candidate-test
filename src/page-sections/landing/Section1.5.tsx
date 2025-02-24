import React, { useEffect, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`Error fetching users: ${response.statusText}`);
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message || 'Unexpected error');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f7f7f7',
        }}
      >
        <div
          style={{
            color: '#333',
            fontSize: '2.5rem',
            fontWeight: 800,
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffe6e6',
        }}
      >
        <div style={{ color: '#b71c1c', fontSize: '1.875rem', fontWeight: 'bold' }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', padding: '20px' }}>
      {/* Header Section with Backdrop Blur */}
      <header
        style={{
          padding: '40px 20px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '40px',
          borderRadius: '8px',
        }}
      >
        <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#333',
              margin: 0,
            }}
          >
            Community Dashboard
          </h1>
          <p style={{ marginTop: '16px', fontSize: '1.25rem', color: '#555' }}>
            {users.length} Users Online
          </p>
        </div>
      </header>

      {/* Users Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {users.map((user) => (
            <div
              key={user.id}
              style={{
                position: 'relative',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid #ddd',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, border 0.3s',
              }}
            >
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '50%',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    marginBottom: '16px',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#555',
                  }}
                >
                  {user.name.charAt(0)}
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: 0 }}>
                  {user.name}
                </h2>
                <p style={{ fontSize: '1rem', color: '#777', margin: '8px 0' }}>
                  @{user.username}
                </p>
                <a
                  href={`mailto:${user.email}`}
                  style={{
                    marginTop: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#1976d2',
                    textDecoration: 'none',
                  }}
                  title={user.email}
                >
                  <FaEnvelope style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                  <span>{user.email.split('@')[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;

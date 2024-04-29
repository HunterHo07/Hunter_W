'use client';
import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { DashboardSidebar } from './DashboardSidebar/page';
import { UserSidebar } from './UserSidebar/page';
import styles from './Layout.module.css'; // Import the CSS module

interface SidebarProps {
    onToggle: (visible: boolean) => void;
}

export function Sidebar({ onToggle }: SidebarProps) {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        const newVisibility = !isSidebarVisible;
        setSidebarVisible(newVisibility);
        onToggle(newVisibility);
    };

    return (
        <div className={styles.layout}>
            <div className={styles.sidebar}>
                <Button onClick={toggleSidebar}>
                    {isSidebarVisible ? '<' : '>'}
                </Button>
                <DashboardSidebar />
            </div>
            <div style={{ transition: 'transform 0.5s ease-out', transform: isSidebarVisible ? 'translateX(50px)' : 'translateX(-120%)' }}>
                <UserSidebar />
            </div>
        </div>
    );
}
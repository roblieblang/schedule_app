import React from "react";
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";

export default function ProfileCard({ card }) {
    return (
        <Card 
            sx={{
                backgroundColor: "#f6f6f6",
                borderRadius: 2,
            }}
        >
            <CardContent>
                <Typography variant="h6">{(card.title).toUpperCase()}</Typography>
                <Typography variant="body2" component="div">
                    {card.mainContent}
                </Typography>
            </CardContent>
        </Card>
    )
}
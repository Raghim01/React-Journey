import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  FormControlLabel,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

export function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);

  return (
    <Box className="settings-page">
      <Box className="settings-header">
        <Typography variant="h4" className="settings-title">
          Settings
        </Typography>
        <Typography className="settings-subtitle">
          Manage your account, preferences, and privacy in one place.
        </Typography>
      </Box>

      <Box className="settings-content">
        <Box className="settings-card profile-card">
          <Box className="settings-card-heading">
            <Typography variant="h6">Profile Information</Typography>
            <Chip label="Public" size="small" color="primary" variant="outlined" />
          </Box>

          <Box className="profile-user-row">
            <Avatar sx={{ width: 56, height: 56 }}>AJ</Avatar>
            <Box>
              <Typography className="profile-name">Alex Johnson</Typography>
              <Typography className="profile-email">alex.johnson@dashboard.dev</Typography>
            </Box>
          </Box>

          <Box className="settings-form-grid">
            <TextField label="First Name" defaultValue="Alex" size="small" fullWidth />
            <TextField label="Last Name" defaultValue="Johnson" size="small" fullWidth />
            <TextField
              label="Email Address"
              defaultValue="alex.johnson@dashboard.dev"
              size="small"
              type="email"
              fullWidth
            />
            <TextField
              label="Job Title"
              defaultValue="Frontend Engineer"
              size="small"
              fullWidth
            />
          </Box>

          <Box className="settings-actions">
            <Button variant="outlined">Cancel</Button>
            <Button variant="contained">Save Changes</Button>
          </Box>
        </Box>

        <Box className="settings-card">
          <Typography variant="h6">Preferences</Typography>
          <Typography className="section-description">
            Tailor your workspace experience and communication settings.
          </Typography>

          <Box className="settings-form-grid">
            <TextField select label="Language" defaultValue="en" size="small" fullWidth>
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="fr">French</MenuItem>
            </TextField>

            <TextField select label="Time Zone" defaultValue="utc-5" size="small" fullWidth>
              <MenuItem value="utc-8">UTC -08:00 (PST)</MenuItem>
              <MenuItem value="utc-5">UTC -05:00 (EST)</MenuItem>
              <MenuItem value="utc+1">UTC +01:00 (CET)</MenuItem>
            </TextField>

            <TextField select label="Theme" defaultValue="system" size="small" fullWidth>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
              <MenuItem value="system">System</MenuItem>
            </TextField>
          </Box>

          <Divider />

          <Box className="toggle-list">
            <FormControlLabel
              control={
                <Switch
                  checked={emailNotifications}
                  onChange={(event) => setEmailNotifications(event.target.checked)}
                />
              }
              label="Email notifications"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={pushNotifications}
                  onChange={(event) => setPushNotifications(event.target.checked)}
                />
              }
              label="Push notifications"
            />
          </Box>
        </Box>

        <Box className="settings-card">
          <Typography variant="h6">Security</Typography>
          <Typography className="section-description">
            Protect your account with stronger authentication and regular updates.
          </Typography>

          <Box className="security-row">
            <Box>
              <Typography className="security-title">Two-factor authentication</Typography>
              <Typography className="security-hint">
                Add an extra layer of security to your account sign-ins.
              </Typography>
            </Box>
            <Switch
              checked={twoFactorAuth}
              onChange={(event) => setTwoFactorAuth(event.target.checked)}
            />
          </Box>

          <Divider />

          <Box className="security-row">
            <Box>
              <Typography className="security-title">Active sessions</Typography>
              <Typography className="security-hint">
                You are currently signed in on 3 devices.
              </Typography>
            </Box>
            <Button variant="outlined" size="small">
              Manage
            </Button>
          </Box>
        </Box>

        <Box className="settings-card danger-zone">
          <Typography variant="h6">Danger Zone</Typography>
          <Typography className="section-description">
            Permanently delete your account and all associated data.
          </Typography>
          <Button color="error" variant="outlined" className="delete-button">
            Delete Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

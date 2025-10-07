import { StyleSheet, Platform } from "react-native";

// Define a bright, playful, and high-energy color palette
const Colors = {
  // A very light, cheerful background (not pure white)
  background: "#F9F6FF", 
  // Bright, electric purple for main actions and branding
  primary: "#6A5ACD", // Slate Blue / Bright Indigo
  // Energetic orange/coral for secondary accents or warnings
  secondary: "#FF7F50", // Coral
  // Deep, slightly desaturated blue for high-contrast text
  textDark: "#333366",
  // Crisp white for buttons/cards
  card: "#FFFFFF",
  // White text on dark backgrounds
  textLight: "#FFFFFF",
  // Very light, fun background accent
  lightAccent: "#DDA0DD", // Plum/Lilac
};

const PlayfulGenZStyles = StyleSheet.create({
  // --- Global Container Style ---
  container: {
    flex: 1,
    // Cheerful, light background
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20, // Medium padding for a less structured feel
  },

  // --- Header Text Style ---
  headerText: {
    // Large, friendly font size
    fontSize: 36,
    // Heavy weight for impact, but a welcoming tone
    fontWeight: "800",
    // Deep, playful text color
    color: Colors.textDark,
    textAlign: "center", // Center-aligned for a fun, conversational feel
    width: '100%',
    paddingHorizontal: 0,
    marginBottom: 40, 
  },

  // --- Subheading Style ---
  subheading: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.primary, // Using the primary color for section titles
    marginBottom: 20,
    alignSelf: 'center', // Centered subheadings
    width: '100%',
  },

  // --- Button Styles ---
  button: {
    width: "90%", // Slightly narrower than full-width for a squarer shape
    // Vibrant primary color
    backgroundColor: Colors.primary,
    paddingVertical: 18, // Extra padding for a 'chunky' look
    borderRadius: 30, // Extremely rounded, "pill-shaped" corners
    alignItems: "center",
    marginTop: 30,
    // Exaggerated, colorful shadow for a playful pop
    ...Platform.select({
      ios: {
        shadowColor: Colors.secondary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      }
    }),
  },

  buttonText: {
    // High-contrast white
    color: Colors.textLight,
    fontWeight: "900", // Max weight for energy
    fontSize: 19,
    letterSpacing: 0.5, // Small spacing adds to the casual feel
  },
  
  // --- Input Field Style ---
  input: {
    width: "90%",
    height: 60, // Very tall for a prominent look
    // No border, relying on background color and shadow
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 15, // Highly rounded
    paddingHorizontal: 20,
    marginBottom: 20,
    // Crisp, white background with subtle shadow
    backgroundColor: Colors.card,
    fontSize: 18,
    color: Colors.textDark,
    ...Platform.select({
      ios: {
        shadowColor: Colors.lightAccent,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      }
    }),
  },

  // --- Information/Card Container (e.g., a "post" or "bubble") ---
  infoContainer: {
    width: "90%",
    // Crisp white background
    backgroundColor: Colors.card,
    padding: 25,
    borderWidth: 0, 
    borderRadius: 20, // Very rounded, "bubble" look
    marginBottom: 25,
    // Funky, distinct shadow with a large spread
    ...Platform.select({
      ios: {
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      }
    }),
  },

  infoText: {
    fontSize: 17,
    // Playful dark text
    color: Colors.textDark,
    marginBottom: 10,
    lineHeight: 28, // Increased line height for a more open, readable chat/post feel
    fontWeight: "500", // Slightly lighter text for readability in long form
  },

  // --- Alternative Button Wrapper (e.g., small secondary action) ---
  buttonWrapper: {
    width: "45%", // Smaller width for secondary actions
    backgroundColor: Colors.secondary, // Bright secondary color
    paddingVertical: 14,
    borderRadius: 15, // Highly rounded
    alignItems: "center",
    marginTop: 15,
    // Soft shadow, secondary color
    ...Platform.select({
      ios: {
        shadowColor: Colors.secondary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      }
    }),
  },
});

export default PlayfulGenZStyles;
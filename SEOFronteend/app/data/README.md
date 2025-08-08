# Data Management Guide

This folder contains all the JSON data files that can be easily modified to update the CEO portfolio content.

## 📁 Data Files

### Personal Information
- **`personal-info.json`** - Personal details, contact information
- **`social-links.json`** - Social media and professional links

### Content Data
- **`navigation.json`** - Navigation menu items
- **`skills.json`** - Skills and proficiency levels
- **`expertise.json`** - Core expertise areas and descriptions
- **`experience.json`** - Professional experience and achievements
- **`achievements.json`** - Awards and recognitions
- **`vision.json`** - Future vision and strategic goals

## 🛠 How to Update Content

1. **Edit JSON Files**: Simply modify the JSON files to update content
2. **Maintain Structure**: Keep the existing JSON structure when making changes
3. **Gradients**: Use Tailwind CSS gradient classes for consistent styling
4. **Icons**: Use Unicode emojis for universal compatibility

## 📝 Example Usage

To update personal information:
```json
{
  "firstName": "Your Name",
  "lastName": "Your Surname",
  "title": "Your Title",
  "company": "Your Company"
}
```

To add new expertise area:
```json
{
  "title": "New Expertise",
  "description": "Description of expertise",
  "icon": "🚀",
  "gradient": "from-blue-500 to-purple-600",
  "skills": ["Skill 1", "Skill 2"]
}
```

## 🎨 Available Gradients

Common gradient classes:
- `from-blue-500 to-purple-600`
- `from-green-500 to-teal-600`
- `from-orange-500 to-red-600`
- `from-purple-500 to-indigo-600`
- `from-emerald-500 to-cyan-600`

## 🔄 Auto-Import

All data files are automatically imported into the constants and used throughout the application. No additional configuration needed.

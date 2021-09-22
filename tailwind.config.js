module.exports = {
  mode: "jit",
  purge: ["./**/*.njk"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgblack: "#181819",
        bgdgray: "#343535",
        bglgray: "#C3C7CB",
        fggray: "#D3D2D3",
        fgblue: "#1E91FE",
      },
      backgroundImage: {
        b100: "url('/img/04-prod-hard/B100.png')",
        w101: "url('/img/04-prod-hard/W101.png')",
        "soft-vis": "url('/img/03-prod-soft/Visual display.png')",
        Introduction: "url('/img/02-sol/Introduction.png')",
        "Project-background": "url('/img/02-sol/Project background.png')",
        "Industry-pain-points": "url('/img/02-sol/Industry pain points.png')",
        "control-center": "url('/img/03-prod-soft/control center.png')",
        "Mobile-applet": "url('/img/03-prod-soft/Mobile applet.png')",
        RJIWechat306x306: "url('/img/RJI_wechat_306_306.png')",
        "icon-Message-Center":
          "url('/img/03-prod-soft-mgmt/icon_Message Center.png')",
        "icon-Equipment-center":
          "url('/img/03-prod-soft-mgmt/icon_Equipment center.png')",
        "icon-Operation-Center":
          "url('/img/03-prod-soft-mgmt/icon_Operation Center.png')",
        "icon-User-Center":
          "url('/img/03-prod-soft-mgmt/icon_User Center.png')",
        "icon-Data-management":
          "url('/img/03-prod-soft-mgmt/icon_Data management.png')",
        "control-center": "url('/img/03-prod-soft-mgmt/control center.png')",
        "icon-Statistical-Analysis":
          "url('/img/03-prod-soft-mgmt/icon_Statistical Analysis.png')",
        "Statistical-Analysis":
          "url('/img/03-prod-soft-mgmt/Statistical Analysis.png')",
        "icon-System-Management":
          "url('/img/03-prod-soft-mgmt/icon_System Management.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

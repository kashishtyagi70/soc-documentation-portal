---
title: SOC Detection Portal
---

# SOC Detection Portal

Welcome to the **Security Operations Center** documentation portal.

This platform contains:
- **Detection Engineering**
- **Threat Hunting**
- **Incident Response**
- *PowerShell analysis*
- *Windows logging*

---

## Important Alert

:::warning
Encoded PowerShell activity may indicate malicious execution.
:::

---

# Windows Event IDs

| Event ID | Description | Severity |
|---|---|---|
| 4688 | Process Creation | High |
| 4104 | PowerShell Logging | Critical |
| 4625 | Failed Login | Medium |

---

# PowerShell Detection Example

```powershell
Get-WinEvent -LogName Security
```

---

# Detection Recommendations

1. Enable Script Block Logging
2. Deploy Sysmon
3. Monitor suspicious child processes
4. Detect Base64 PowerShell payloads

---

# Bold and Italic Text

This is **bold text**.

This is *italic text*.

This is ***bold italic text***.

---

# Add Image

![SOC Diagram](/images/download.jpg)

---

# Add Video

<iframe
  width="100%"
  height="500"
  src="https://www.youtube.com/embed/eIsIKPNvcWE"
  title="YouTube video"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
---

# Local Video

<video width="100%" controls>
  <source src="/video/video.MP4" type="video/mp4" />
</video>

---
# Important Note

:::tip
Always validate alerts before escalation.
:::

---

# Dangerous Activity

:::danger
Never execute unknown PowerShell payloads directly on production systems.
:::
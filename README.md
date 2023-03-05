![Banner](banner.png)

## Overview

The objective of the *In Darkness* project is to make accessible this often misunderstood world of hacking.

This project is for educational purpose only.

### Sections

The documentation is divided into 3 main sections :
<ol>
<li><b>Web</b> (which is also the Application layer of Network)</li>
<li>
<details>
	<summary><b>Network</b> (Divided by the <a href="https://en.wikipedia.org/wiki/OSI_model">OSI model</a>)</summary>
<table>
	<tr>
		<td>Application</td>
		<td>Web vulnerabilities, Denial of Service attacks, Google Hacking etc.</td>
	</tr>
	<tr>
		<td>Session</td>
		<td>SSL/TLS attacks</td>
	</tr>
	<tr>
		<td>Transport</td>
		<td>UDP DDoS reflection</td>
	</tr>
	<tr>
		<td>Data link</td>
		<td>ARP spoofing, DNS cache poisoning, wireless networks attacks etc.</td>
	</tr>
</table>
</details>
</li>
<li>
<details>
	<summary><b>System</b></summary>
<table>
	<tr>
		<td>Binary</td>
		<td rowspan="2">Anomaly exploitation, malwares, AV evasion</td>
		<td>Side-channel attack</td>
	</tr>
	<tr>
		<td>Scripting</td>
		<td>Polymorphic and self-modifying codes</td>
	</tr>
	<tr>
		<td>High-risk vulnerabilities</td>
		<td colspan="2">RCE, LPE, SBX, VME and FCP</td>
	</tr>
</table>
</details>
</li>
</ol>

## Launch with Docker Compose

Start :
- Frontend - React.JS
- Backend - Node.JS
- Database - MongoDB

```sh
docker-compose up --build
```

## Development

[See coding rules](coding-rules.md)

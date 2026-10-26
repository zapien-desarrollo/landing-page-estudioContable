# Demo · Estudio contable (Estudio Cerro)

Demo de portfolio de una landing para un estudio contable. Mismo branding que la demo de
inmobiliaria (Cerro Propiedades). Estudio, precios, escala de monotributo y fechas son de ejemplo.
Los formularios, WhatsApp y el pago no envían nada: muestran un aviso de "Demo".

## Stack

Sitio estático sin build: `index.html`, `styles.css`, `main.js`.

```bash
npx serve .
```

## Qué muestra

- Hero con el próximo vencimiento calculado según la fecha del día.
- Selector de perfil (monotributista, responsable inscripto, pyme, empleador) con lo que
  incluye y el abono recomendado, más la grilla de servicios.
- Abonos mensuales con opción anual (-15 %) y checkout simulado con Mercado Pago.
- Calculadora de categoría de monotributo con aviso de cercanía al tope.
- Calendario de vencimientos del mes por terminación de CUIT (pasa al mes siguiente
  cuando ya vencieron todos).
- Cómo empezamos, equipo, testimonios, preguntas frecuentes y contacto con mapa.

Los datos de abonos, escala y vencimientos están al principio de cada bloque en `main.js`.

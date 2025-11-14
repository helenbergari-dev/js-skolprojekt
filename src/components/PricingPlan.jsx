export default function PricingPlan() {
  return (
    <section className="pricing-wrapper">
      <div className="pricing-container">
        <p className="pricing-eyebrow">pricing plan</p>
        <p className="pricing-intro">
          Find the Perfect Plan for<br /> Your Storage Needs
        </p>

        <div className="pricing-grid">
          
          <div className="pricing-box">
            <h3>Small Unit</h3>
            <p>
              <span className="price">$50</span> /month
            </p>
            <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
            <hr className="divider" />
            <ul className="checklist">
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Nam nec ipsum in dolor</li>
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Fusce nec ligula ut arcu</li>
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Aliquam pulvinar arcu in</li>
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Duis gravida enim porta</li>
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Etiam eget libero non ligula</li>
            </ul>
            <button className="rent-btn">Rent Now</button>
          </div>

          
          <div className="pricing-box highlight">
            <h3>Medium Unit</h3>
            <p>
              <span className="price">$100</span> /month
            </p>
            <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
            <hr className="divider" />
            <ul className="checklist">
              <li><img src="/check-icon2.svg" alt="" aria-hidden="true" />Nam nec ipsum in dolor</li>
              <li><img src="/check-icon2.svg" alt="" aria-hidden="true" />Fusce nec ligula ut arcu</li>
              <li><img src="/check-icon2.svg" alt="" aria-hidden="true" />Aliquam pulvinar arcu in</li>
              <li><img src="/check-icon2.svg" alt="" aria-hidden="true" />Duis gravida enim porta</li>
              <li><img src="/check-icon2.svg" alt="" aria-hidden="true" />Etiam eget libero non ligula</li>
            </ul>
            <button className="rent-btn">Rent Now</button>
          </div>

          
          <div className="pricing-box">
            <h3>Large Unit</h3>
            <p>
              <span className="price">$150</span> /month
            </p>
            <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
            <hr className="divider" />
            <ul className="checklist">
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Nam nec ipsum in dolor</li>
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Fusce nec ligula ut arcu</li>
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Aliquam pulvinar arcu in</li>
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Duis gravida enim porta</li>
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Etiam eget libero non ligula</li>
            </ul>
            <button className="rent-btn">Rent Now</button>
          </div>

          
          <div className="pricing-box">
            <h3>Executive Unit</h3>
            <p>
              <span className="price">$200</span> /month
            </p>
            <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
            <hr className="divider" />
            <ul className="checklist">
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Nam nec ipsum in dolor</li>
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Fusce nec ligula ut arcu</li>
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Aliquam pulvinar arcu in</li>
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Duis gravida enim porta</li>
              <li><img src="/check-icon.svg" alt="" aria-hidden="true" />Etiam eget libero non ligula</li>
            </ul>
            <button className="rent-btn">Rent Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
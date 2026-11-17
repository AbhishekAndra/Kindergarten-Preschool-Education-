/**
 * Stackly / Little Sprouts Academy - Master JavaScript
 * Handles Navigation, Modals, LocalStorage Authentication, Dashboard, and Interactive Components
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 3. Update Portal Button in Navbar based on Login State
  const savedEmail = localStorage.getItem('stackly_user_email');
  const navPortalBtn = document.getElementById('nav-portal-btn');
  const mobilePortalBtn = document.getElementById('mobile-portal-btn');
  if (savedEmail) {
    if (navPortalBtn) {
      navPortalBtn.href = 'dashboard.html';
      navPortalBtn.innerHTML = `
        <i data-lucide="layout-dashboard" class="w-3.5 h-3.5 text-[#006747]"></i>
        <span>Portal Dashboard</span>
      `;
    }
    if (mobilePortalBtn) {
      mobilePortalBtn.href = 'dashboard.html';
      mobilePortalBtn.textContent = 'Portal Dashboard';
    }
  }

  // 4. Tour Modal Handling
  const tourModal = document.getElementById('tour-modal');
  const tourButtons = document.querySelectorAll('.open-tour-btn');
  const closeTourBtn = document.getElementById('close-tour-btn');
  const tourForm = document.getElementById('tour-form');
  const tourSuccess = document.getElementById('tour-success');

  window.openTourModal = () => {
    if (tourModal) {
      tourModal.classList.remove('modal-hidden');
      if (window.lucide) window.lucide.createIcons();
    }
  };

  window.closeTourModal = () => {
    if (tourModal) {
      tourModal.classList.add('modal-hidden');
    }
  };

  tourButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openTourModal();
    });
  });

  if (closeTourBtn) {
    closeTourBtn.addEventListener('click', window.closeTourModal);
  }

  if (tourModal) {
    tourModal.addEventListener('click', (e) => {
      if (e.target === tourModal) {
        window.closeTourModal();
      }
    });
  }

  if (tourForm) {
    tourForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (tourSuccess) {
        tourForm.classList.add('hidden');
        tourSuccess.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }

  // 5. FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-btn');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');
    if (btn && content) {
      btn.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');
        // close all
        faqItems.forEach((other) => {
          const otherContent = other.querySelector('.faq-content');
          const otherIcon = other.querySelector('.faq-icon');
          if (otherContent) otherContent.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });
        if (!isOpen) {
          content.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // 6. Login Page Specific Logic
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    let currentRole = 'parent';

    // Role switcher
    const roleParentBtn = document.getElementById('role-parent-btn');
    const roleStaffBtn = document.getElementById('role-staff-btn');

    if (roleParentBtn && roleStaffBtn) {
      roleParentBtn.addEventListener('click', () => {
        currentRole = 'parent';
        roleParentBtn.className = 'py-2 px-4 rounded-full transition flex items-center justify-center gap-1.5 cursor-pointer bg-white text-slate-900 shadow-xs font-bold';
        roleStaffBtn.className = 'py-2 px-4 rounded-full transition flex items-center justify-center gap-1.5 cursor-pointer text-slate-600 hover:text-slate-900 font-bold';
        if (emailInput && !emailInput.value) emailInput.placeholder = 'parent@family.com';
      });

      roleStaffBtn.addEventListener('click', () => {
        currentRole = 'staff';
        roleStaffBtn.className = 'py-2 px-4 rounded-full transition flex items-center justify-center gap-1.5 cursor-pointer bg-white text-slate-900 shadow-xs font-bold';
        roleParentBtn.className = 'py-2 px-4 rounded-full transition flex items-center justify-center gap-1.5 cursor-pointer text-slate-600 hover:text-slate-900 font-bold';
        if (emailInput && !emailInput.value) emailInput.placeholder = 'educator@littlesprouts.edu';
      });
    }

    // Demo Fill Buttons
    const demoParentBtn = document.getElementById('demo-parent-btn');
    const demoStaffBtn = document.getElementById('demo-staff-btn');
    if (demoParentBtn && emailInput && passwordInput) {
      demoParentBtn.addEventListener('click', () => {
        emailInput.value = 'eleanor.miller@family.com';
        passwordInput.value = 'SproutParent2026!';
        if (roleParentBtn) roleParentBtn.click();
      });
    }
    if (demoStaffBtn && emailInput && passwordInput) {
      demoStaffBtn.addEventListener('click', () => {
        emailInput.value = 'sarah.jenkins@littlesprouts.edu';
        passwordInput.value = 'LeadEducator2026!';
        if (roleStaffBtn) roleStaffBtn.click();
      });
    }

    // Instant Auth Buttons (Google, Touch ID)
    const googleAuthBtn = document.getElementById('auth-google-btn');
    const biometricAuthBtn = document.getElementById('auth-biometric-btn');
    if (googleAuthBtn) {
      googleAuthBtn.addEventListener('click', () => {
        const mail = (emailInput && emailInput.value.trim()) || 'guardian.google@family.com';
        localStorage.setItem('stackly_user_email', mail);
        localStorage.setItem('stackly_user_role', currentRole);
        window.location.href = 'dashboard.html';
      });
    }
    if (biometricAuthBtn) {
      biometricAuthBtn.addEventListener('click', () => {
        const mail = (emailInput && emailInput.value.trim()) || 'biometric.user@family.com';
        localStorage.setItem('stackly_user_email', mail);
        localStorage.setItem('stackly_user_role', currentRole);
        window.location.href = 'dashboard.html';
      });
    }

    // Password Toggle
    const togglePassBtn = document.getElementById('toggle-password-btn');
    if (togglePassBtn && passwordInput) {
      togglePassBtn.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
        } else {
          passwordInput.type = 'password';
        }
      });
    }

    // Form Submission
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredEmail = emailInput ? emailInput.value.trim() : '';
      const finalEmail = enteredEmail || (currentRole === 'parent' ? 'eleanor.miller@family.com' : 'sarah.jenkins@littlesprouts.edu');
      localStorage.setItem('stackly_user_email', finalEmail);
      localStorage.setItem('stackly_user_role', currentRole);
      window.location.href = 'dashboard.html';
    });
  }

  // 7. Dashboard Page Specific Logic
  const dashboardContainer = document.getElementById('dashboard-page');
  if (dashboardContainer) {
    const userEmail = localStorage.getItem('stackly_user_email') || 'eleanor.miller@family.com';
    const userRole = localStorage.getItem('stackly_user_role') || 'parent';

    // Populate email badges
    const topEmailBadge = document.getElementById('dash-top-email');
    const cardEmailBadge = document.getElementById('dash-card-email');
    const roleBadge = document.getElementById('dash-role-badge');
    const billingEmailBadge = document.getElementById('dash-billing-email');
    const chatInput = document.getElementById('dash-chat-input');

    if (topEmailBadge) topEmailBadge.textContent = userEmail;
    if (cardEmailBadge) cardEmailBadge.textContent = userEmail;
    if (billingEmailBadge) billingEmailBadge.textContent = userEmail;
    if (chatInput) chatInput.placeholder = `Type message from ${userEmail}...`;
    if (roleBadge) {
      roleBadge.textContent = userRole === 'staff' ? 'Staff / Lead Educator' : 'Verified Guardian';
    }

    // Sign out button
    const signOutBtn = document.getElementById('dash-signout-btn');
    if (signOutBtn) {
      signOutBtn.addEventListener('click', () => {
        localStorage.removeItem('stackly_user_email');
        localStorage.removeItem('stackly_user_role');
        window.location.href = 'login.html';
      });
    }

    // Tabs Switcher
    const tabBtns = document.querySelectorAll('.dash-tab-btn');
    const tabPanels = document.querySelectorAll('.dash-tab-panel');

    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        tabBtns.forEach((b) => {
          b.className = 'dash-tab-btn px-4 py-2 rounded-full transition cursor-pointer text-slate-600 hover:bg-slate-100 font-bold';
        });
        btn.className = 'dash-tab-btn px-4 py-2 rounded-full transition cursor-pointer bg-[#006747] text-white shadow-2xs font-bold';

        tabPanels.forEach((panel) => {
          if (panel.id === `tab-${targetTab}`) {
            panel.classList.remove('hidden');
          } else {
            panel.classList.add('hidden');
          }
        });

        if (window.lucide) window.lucide.createIcons();
      });
    });

    // Chat Message Form
    const chatForm = document.getElementById('dash-chat-form');
    const chatMessagesContainer = document.getElementById('dash-chat-messages');

    if (chatForm && chatInput && chatMessagesContainer) {
      chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        const newMsgDiv = document.createElement('div');
        newMsgDiv.className = 'p-4 rounded-2xl text-xs space-y-1 max-w-lg bg-[#006747] text-white ml-auto';
        newMsgDiv.innerHTML = `
          <div class="flex justify-between text-[10px] opacity-80">
            <span>You (${userEmail})</span>
            <span>Just now</span>
          </div>
          <p class="leading-relaxed">${text}</p>
        `;
        chatMessagesContainer.appendChild(newMsgDiv);
        chatInput.value = '';
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
      });
    }
  }

  // 8. Signup Page Specific Logic
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    const autoFillBtn = document.getElementById('signup-autofill-btn');
    const pName = document.getElementById('signup-pname');
    const email = document.getElementById('signup-email');
    const phone = document.getElementById('signup-phone');
    const cName = document.getElementById('signup-cname');
    const pass = document.getElementById('signup-pass');
    const signupCard = document.getElementById('signup-card');
    const successCard = document.getElementById('signup-success-card');
    const successEmail = document.getElementById('signup-success-email');
    const successPName = document.getElementById('signup-success-pname');
    const successCName = document.getElementById('signup-success-cname');

    if (autoFillBtn && pName && email && phone && cName && pass) {
      autoFillBtn.addEventListener('click', () => {
        pName.value = 'Eleanor & David Miller';
        email.value = 'eleanor.miller@family.com';
        phone.value = '(555) 019-2810';
        cName.value = 'Leo Miller';
        pass.value = 'SproutFamily2026!';
      });
    }

    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const mail = email ? email.value.trim() : 'eleanor.miller@family.com';
      localStorage.setItem('stackly_user_email', mail);
      localStorage.setItem('stackly_user_role', 'parent');

      if (signupCard && successCard) {
        signupCard.classList.add('hidden');
        successCard.classList.remove('hidden');
        if (successEmail) successEmail.textContent = mail;
        if (successPName) successPName.textContent = pName.value;
        if (successCName) successCName.textContent = cName.value;
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }

  // Re-run Lucide Icons after any DOM adjustments
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

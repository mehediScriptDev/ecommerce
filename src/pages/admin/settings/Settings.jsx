import { useState } from 'react';
import SettingsCard from './components/SettingsCard';
import Tag from './components/Tag';
import AddModal from './components/AddModal';
import { TextInput } from '../../../components/shared/form';
import { INITIAL_SETTINGS, SECTIONS } from './constants';
import AdminDashboardTitle from '../../../components/dashboards/AdminDashboardTitle';

const Settings = () => {
    const [settings, setSettings] = useState(INITIAL_SETTINGS);
    const [activeSection, setActiveSection] = useState(null);
    const [modalValues, setModalValues] = useState({});

    const sections = SECTIONS(settings);

    const handleOpenModal = (section) => {
        setActiveSection(section);
        setModalValues({});
    };

    const handleCloseModal = () => {
        setActiveSection(null);
        setModalValues({});
    };

    const handleModalChange = (e) => {
        const { name, value } = e.target;
        setModalValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleModalSubmit = () => {
        if (!activeSection) return;

        const valueKey = activeSection.valueKey || 'value';
        const newValue = modalValues[valueKey];
        if (!newValue) return;

        setSettings((prev) => {
            const updated = { ...prev, [activeSection.key]: [...prev[activeSection.key], newValue] };

            if (activeSection.key === 'conditions' && modalValues.price) {
                updated.conditionPrices = {
                    ...prev.conditionPrices,
                    [newValue]: modalValues.price,
                };
            }

            return updated;
        });

        handleCloseModal();
    };

    const handleDeleteItem = (sectionKey, index) => {
        setSettings((prev) => ({
            ...prev,
            [sectionKey]: prev[sectionKey].filter((_, i) => i !== index),
        }));
    };

    const handlePriceChange = (condition, price) => {
        setSettings((prev) => ({
            ...prev,
            conditionPrices: { ...prev.conditionPrices, [condition]: price },
        }));
    };

    const renderSection = (section) => (
        <SettingsCard
            key={section.key}
            title={section.title}
            onAdd={() => handleOpenModal(section)}
            addLabel={section.addLabel}
        >
            <div className="flex flex-wrap gap-2">
                {settings[section.key].map((item, index) => (
                    <Tag
                        key={`${item}-${index}`}
                        label={item}
                        onDelete={() => handleDeleteItem(section.key, index)}
                    />
                ))}
            </div>
        </SettingsCard>
    );

    const conditionsSection = sections.find((s) => s.key === 'conditions');
    const otherSections = sections.filter((s) => s.key !== 'conditions');
    const beforePrice = otherSections.slice(0, 3);
    const afterPrice = otherSections.slice(3);

    return (
        <div className="space-y-6">
            <div>
                <AdminDashboardTitle title={"Admin Settings"} subtitle={"Manage your account and store preferences."} />
            </div>

            <div className="space-y-4">
                {beforePrice.map(renderSection)}

                {renderSection(conditionsSection)}

                <div className="rounded-lg border border-gray-200 bg-white p-5">
                    <h3 className="mb-4 text-base font-semibold text-gray-900">Set Condition Price</h3>
                    <div className="flex flex-wrap items-center gap-4">
                        {settings.conditions.map((condition) => (
                            <div key={condition} className="flex items-center gap-2">
                                <span className="text-sm text-gray-700">{condition}</span>
                                <TextInput
                                    value={settings.conditionPrices[condition] || ''}
                                    onChange={(e) => handlePriceChange(condition, e.target.value)}
                                    className="w-28 bg-gray-50"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {afterPrice.map(renderSection)}
            </div>

            <AddModal
                title={activeSection?.modalTitle || ''}
                isOpen={!!activeSection}
                fields={activeSection?.fields || []}
                values={modalValues}
                onChange={handleModalChange}
                onSubmit={handleModalSubmit}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default Settings;